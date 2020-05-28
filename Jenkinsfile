node {
    stage 'Checkout Repository'
    checkout scm

    stage 'Build'
		def dockerImage = docker.build("scheduly:${env.BRANCH_NAME.replace("/","-")}")

    stage 'Test'
    withDockerContainer(image: "node:12") {
      dir("server") {
        sh "yarn"
        try {
        sh "yarn test:ci"
        } finally {
          junit 'server/__tests__/coverage/junit/junit.xml'
          publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll             : true,
            reportDir            : 'server/__tests__/coverage/lcov-report',
            reportFiles          : 'index.html',
            reportName           : 'Code Coverage'
          ]
        }
      }
    }

    stage 'Deploy to Staging'
    sh 'docker service update --force devops_stag'

    stage 'Deploy to Production'
    input "Deseja efetur deploy para produção?"
    sh 'docker service update --force devops_prod'
}
