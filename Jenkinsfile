node {
    stage 'Checkout Repository'
    checkout scm

    stage 'Build'
		def dockerImage = docker.build("scheduly:${env.BRANCH_NAME}")
}
