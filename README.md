https://www.udemy.com/course/microfrontend-course/

INFLEXIBLE REQUIREMENTS:
1. ZERO-COUPLING between CHILD objects: 
	- No importing functions/objects/etc
	- No shared state
	- Shared libraries through MF is ok
	
2. Near-zero coupling between container and child apss:
	- Containers shouldn't assume taht a child is using particular framework
	- Any necessary communication done with callback or simple events
	
3. CSS from one project shouldn't affect another
4. Version control (monorep/separate) shouldn't have any impact on the overall project
5. Container should e able to decide to always use the latest version of a microFE or specify version



S3 Bucket Creation and Configuration
Go to AWS Management Console and use the search bar to find S3

Click Create Bucket

Specify an AWS Region

Provide unique Bucket Name and click Create Bucket

Click the new Bucket you have created from the Bucket list.

Select Properties

Scroll down to Static website hosting and click Edit

Change to Enable

Enter index.html in the Index document field

Click Save changes

Select Permissions

Click Edit in Block all public access

Untick the Block all public access box.

Click Save changes

Type confirm in the field and click Confirm

Find the Bucket Policy and click Edit

Click Policy generator

Change Policy type to S3 Bucket Policy

Set Principle to *

Set Action to Get Object

Copy the S3 bucket ARN to add to the ARN field and add /* to the end.
eg: arn:aws:s3:::mfe-dashboard/*

Click Add Statement

Click Generate Policy

Copy paste the generated policy text to the Policy editor

Click Save changes


CloudFront setup
Go to AWS Management Console and use the search bar to find CloudFront

Click Create distribution

Set Origin domain to your S3 bucket

Find the Default cache behavior section and change Viewer protocol policy to Redirect HTTP to HTTPS

Scroll down and click Create Distribution

After Distribution creation has finalized click the Distribution from the list, find its Settings and click Edit

Scroll down to find the Default root object field and enter /container/latest/index.html

Click Save changes

Click Error pages

Click Create custom error response

Change HTTP error code to 403: Forbidden

Change Customize error response to Yes

Set Response page path to /container/latest/index.html

Set HTTP Response Code to 200: OK


Create IAM user
Go to AWS Management Console and use the search bar to find IAM

In IAM dashboard, click Users in the left sidebar

Click Add Users

Enter a unique name in the User name field

In Select AWS credential type tick Access Key - Programmatic access

Click Next: Permissions

Select Attach existing policies directly

Use search bar to find and tick AmazonS3FullAccess and CloudFrontFullAccess

Click Next: Tags

Click Next: Review

Click Create user