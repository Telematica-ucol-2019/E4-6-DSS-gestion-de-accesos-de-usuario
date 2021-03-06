// Import npm and local modules
import 'dotenv/config';
import isPortReachable from 'is-port-reachable';
// Create portCheck function
const portCheck = (async () => {
    // Get a free port
    if (!(await isPortReachable(4006, { host: 'localhost' }))) {
        return 4006;
    } else if (!(await isPortReachable(process.env.PORT, { host: 'localhost' }))) {
        return process.env.PORT;
    } else {
        return 0;
    }
});

export default portCheck;