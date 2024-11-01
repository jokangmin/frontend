pipeline {
    agent any

    stages {
        stage('Build React') {
            steps {
                sh 'npm install' 
                sh 'npm run build' 
            }
        }
        stage('Deploy React') {
    		steps {
        		sh 'cp -R dist/* /Users/jokangmin/Documents/Web/lib/apache-tomcat-9.0.93/webapps/react/'
    		}
	}	
    }
}

