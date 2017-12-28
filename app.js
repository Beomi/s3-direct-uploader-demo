var uploader = new qq.s3.FineUploader({
    debug: false, // defaults to false
    element: document.getElementById('fine-uploader'),
    request: {
        // S3 Bucket URL
        endpoint: 'https://s3-signature-dev-py3.s3.amazonaws.com', 
        // iam ACCESS KEY
        accessKey: 'AKIAIHUAMKBO27EZQ6RA' 
    },
    objectProperties: {
        region: 'ap-northeast-2',
        key(fileId) {
            var prefixPath = 'uploads'
            var filename = this.getName(fileId)
            return prefixPath + '/' + filename
        }
    },
    signature: {
        // version
        version: 4,
        // AWS API Gate URL
        endpoint: 'https://9n2qae2nak.execute-api.ap-northeast-2.amazonaws.com/live'
    },
    retry: {
        enableAuto: true // defaults to false
    }
});