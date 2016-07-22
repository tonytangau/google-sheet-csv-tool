const SheetId = 'abc'; // Replace with Google sheet ID
const destPath = '.\\csv\\';

var sheets = [
    {
        dest: destPath + 'general.csv',
        fileId: SheetId,
        gid: '1002190520',
        finish: false
    },{
        dest: destPath + 'saLogin.csv',
        fileId: SheetId,
        gid: '1679352578',
        finish: false
    },{
        dest: destPath + 'bag.csv',
        fileId: SheetId,
        gid: '46398485',
        finish: false
    },{
        dest: destPath + 'bagMonogramming.csv',
        fileId: SheetId,
        gid: '1158368467',
        finish: false
    },{
        dest: destPath + 'myAccount.csv',
        fileId: SheetId,
        gid: '1137462996',
        finish: false
    },{
        dest: destPath + 'plp.csv',
        fileId: SheetId,
        gid: '745971574',
        finish: false
    },{
        dest: destPath + 'pdp.csv',
        fileId: SheetId,
        gid: '1515708792',
        finish: false
    },{
        dest: destPath + 'registerSignIn.csv',
        fileId: SheetId,
        gid: '1915915475',
        finish: false
    },{
        dest: destPath + 'checkout.csv',
        fileId: SheetId,
        gid: '994728069',
        finish: false
    },{
        dest: destPath + 'storeLocator.csv',
        fileId: SheetId,
        gid: '2009265105',
        finish: false
    },{
        dest: destPath + 'forgotPassword.csv',
        fileId: SheetId,
        gid: '1188982271',
        finish: false
    },{
        dest: destPath + 'search.csv',
        fileId: SheetId,
        gid: '66204365',
        finish: false
    }
];

var options = {
    id: '123abc.apps.googleusercontent.com', // Replace with your id
    redirect: 'http://localhost:3477/',
    secret: 'secret', // And secret
};

module.exports = {
    sheets: sheets,
    options: options
}