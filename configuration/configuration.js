'use strict';

import { default as development } from './development.json';
import { default as production } from './production.json';


const configurations = {
	development,
	production
}

const configuration = configurations[process.env.NODE_ENV] ?? development;


export default configuration;
