node {
    stage 'Checkout Repository'
    checkout scm

    stage 'Build'
		def dockerImage = docker.build("scheduly:${env.BRANCH_NAME.replace("/","-")}")

    stage 'Test'
    withDockerContainer(image: "node:12-alpine") {
      sh "cd server && npm install"
    }

    stage 'Deploy to Staging'
    sh 'docker service update --force devops_stag'

    stage 'Deploy to Production'
    input "Deseja efetur deploy para produção?"
    sh 'docker service update --force devops_prod'
}
