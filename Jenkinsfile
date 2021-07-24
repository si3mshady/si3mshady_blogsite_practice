pipeline {
    agent any
     environment {
                USERNAME = credentials('DockerHubUsername')
                PASSWORD = credentials('DockerHubPassword')
                TOKEN = credentials('SNYK_TOKEN')
            } 

    stages {

        stage('Build & Push Dockerfile.') {
            steps {      
                     
            sh 'chmod 777 /var/run/docker.sock'
            sh 'docker build .  -t  si3mshady/blogsite-fe:2' 
            sh 'docker login -u $USERNAME -p $PASSWORD'       
            sh 'docker push si3mshady/blogsite-fe:2'  
              

            }
        }

    stage('Scan Image.') {
            steps {
                sh '''docker run -e SNYK_TOKEN=$TOKEN  \
                -v $PWD:/project  snyk/snyk-cli:docker test --docker \
                  si3mshady/blogsite-fe:2  | tee results.scan                   
                  echo 'Scanning Complete'
                    ''' 

        
    }
    }

   
    stage('Test Scan Report for High Vuln Count') {
            steps {
              
           sh 'echo check scan results for number of high vulns by grepping output'   
           sh '''count=$(cat results.scan | grep -i high | wc -l);
                 echo $count
                 result=$(if [ $count -lt 200 ]; then echo PASS; else echo "FAIL"; fi);
                 echo $result
                     
                 if [ $result = PASS ]; then  docker save si3mshady/blogsite-fe:2 > frontend.tar ; else echo "FAIL"; fi;
                           
           '''
                
    }
    }

        stage('Send exported Docker image to s3.') {
                steps {
                    sh '''                          
                            
                    aws s3 cp ./frontend.tar s3://si3mshady-artifacts                 
                    rm frontend.tar;
                    rm results.scan;  
                    rm -rf snyk* || true && echo "-1";        
                    for i in $(docker images | awk '{print $3}'); do sudo docker  rmi $i --force ; done || true && echo -1 
                    docker system prune -f;                    
                    
                    '''
                }
            }



    }
}

// Elliott Arnold 
// Practice using snyk to scan docker images 
//