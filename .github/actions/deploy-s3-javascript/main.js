const core = require('@actions/core')
// const github = require('@actions/github')
const exec = require('@actions/exec')

const run = () => {
    // Get input values for the deployment target
    const bucketName = core.getInput('bucket-name', {required: true})
    const sourceFolder = core.getInput('dist-folder', {required: true})
    const region = core.getInput('bucket-region', {required: true})



    // Use input to call AWS api to upload to bucket
    exec.exec(`aws s3 sync ${sourceFolder} s3://${bucketName} --region ${region}`)

    core.notice('Hello from my custom Javascript action')
}

run()