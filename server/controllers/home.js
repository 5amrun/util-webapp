import * as config from '../config.js'


const homeController = async (req, res) => {
    console.log('in homeController...');
    
    res.sendFile(config.INDEX_HTML);
    // res.wrtie('heeey');
}


export default homeController;
