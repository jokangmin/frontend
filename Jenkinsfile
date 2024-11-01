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
                // 경로가 존재하지 않을 경우 생성
                sh 'mkdir -p /Users/jokangmin/Documents/Web/lib/apache-tomcat-9.0.93/webapps/react/'
                
                // 빌드 파일 복사
                sh 'cp -R dist/* /Users/jokangmin/Documents/Web/lib/apache-tomcat-9.0.93/webapps/react/'
            }
        }	
    }
}
