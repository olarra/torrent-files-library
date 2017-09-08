// events

/**
 * missing_parameter event
 * @event TorrentLibrary#missing_parameter
 * @type {object}
 * @property {string} functionName - Indicates the function name when the error occurs.
 * @example
 * TorrentLibraryInstance.on('missing_parameter',function(callback){
 *      console.log('Parameter is missing in ' + callback.functionName);
 * })
 */

/**
 * error_in_function event
 * @event TorrentLibrary#error_in_function
 * @type {object}
 * @property {string} functionName - Indicates the function name when the error occurs.
 * @property {string} error - The error message got by error.message
 * @example
 * TorrentLibraryInstance.on('error_in_function',function(callback){
 *      console.log('Function ' + callback.functionName + ' has the following error : ' + callback.error);
 * })
 */

/**
 * addNewPath event
 * @event TorrentLibrary#addNewPath
 * @type {object}
 * @property {...string} paths - all the paths that were added
 * @example
 * TorrentLibraryInstance.on('addNewPath',function(callback){
 *      console.log('The following files were added : ' + callback.paths);
 * })
 */

/**
 * scan event
 * @event TorrentLibrary#scan
 * @type {object}
 * @property {...string} files - all the files that were found and added if not yet in lib
 * @example
 * TorrentLibraryInstance.on('scan',function(callback){
 *      console.log('The following files were found : ' + callback.files);
 * })
 */

/**
 * removeOldFiles event
 * @event TorrentLibrary#removeOldFiles
 * @type {object}
 * @property {...string} files - all the files that were found and removed if not yet in lib
 * @example
 * TorrentLibraryInstance.on('removeOldFiles',function(callback){
 *      console.log('The following files were added : ' + callback.files);
 * })
 */
