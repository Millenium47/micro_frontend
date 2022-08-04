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