const fs = require('fs');
const path = require('path');
const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function begin(){
    let startingTime = Date.now()
    let maxTime = startingTime + (1000 * 60 * 60 * 4) // +4 hours
    let waitTime = 1000 * 60 * 5 // 5 minutes
    while(true){
        // if docker exited , then build is complete
    if(!checkDockerStatus()){
        console.log('Docker exited')
     // set the build environment variable to true
     break;
     // if more than max time, and build running, then create checkpoints & tar it
    }else if(Date.now()>maxTime && checkDockerStatus()){
       // create checkpoint
       await exec("sudo docker exec --privileged -it criu docker checkpoint create --checkpoint-dir=/checkpoint docubuild checkpoint1")
       // create tar
       await exec("sudo tar -cMv --remove-files --tape-length=2G --file=my_archive-{0..50}.tar checkpoint")
       break;
    }
    
    
        await new Promise(r => setTimeout(r, waitTime));
    }

}
// returns true if docker is running else false
async function checkDockerStatus(){
let {stdout} = await exec('sudo docker exec --privileged -it criu docker ps | grep -c docubuild')
if(stdout.trim() == '0')
    return false
else
    return true
}

begin()