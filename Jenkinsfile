node {
    stage 'Checkout Repository'
    checkout scm

    stage 'Build'
		def dockerImage = docker.build("scheduly:${env.BRANCH_NAME}")

    withDockerContainer(image: "node:12-alpine") {
      sh "node -v"
    }
}
