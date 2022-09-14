import * as cdk from 'aws-cdk-lib';
import { RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkGithubactionsCollaborationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3Bucket = new cdk.aws_s3.Bucket(this, 's3Bucket', {
      removalPolicy: RemovalPolicy.DESTROY
    })
  }
}

const app = new cdk.App()
new CdkGithubactionsCollaborationStack(app, 'CdkGithubactionsCollaborationStack')
app.synth()