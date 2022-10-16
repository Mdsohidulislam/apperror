Solution 1:

use “–legacy-peer-deps” with npm command which tells npm to ignore all peerDependecies

Copy to Clipboard
npm install --legacy-peer-deps
Solution 2:

use “–force” with npm which tells npm to fetch the resources from its repository even when you have a copy in the local machine.

Copy to Clipboard
npm install --force
Solution 3:

You can also downgrade your npm to a version less than 7. (note that the following command install npm version 6.14.13 on your system globally, if you want to install it in a particular application, omit -g from the command)

Copy to Clipboard
npm install -g npm@6.14.13
npm install -g npm@6.14.13
 

If you got the error message “ERESOLVE unable to resolve dependency tree error” even while installing a npm package, then also you can use any of the solution provided above.
