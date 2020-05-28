node {
    stage 'Checkout Repository'
    checkout scm

    stage 'Build'
		def dockerImage = docker.build("scheduly:${env.BRANCH_NAME.replace("/","-")}")

    stage 'Test'
    withDockerContainer(image: "node:12-alpine") {
      sh "node -v"
    }

    stage 'Deploy to Staging'
    sh 'docker service update --force devops_stag'

    stage 'Deploy to Staging'
    def deployToProduction = input(
        id: 'DeployToProduction', message: 'Deploy em produção?', parameters: [
        [$class: 'BooleanParameterDefinition', defaultValue: false, description: '', name: 'Please confirm you agree with this']
        ]);

    if (deployToProduction) {
      sh 'docker service update --force devops_prod'
    }
}
