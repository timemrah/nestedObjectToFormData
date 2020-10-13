function nestedObjToFormData(obj, formData = new FormData()){

    this.formData = formData;

    this.createFormData = function(obj, subKeyStr = ''){
        for(let i in obj){
            let value = obj[i];
            let subKeyStrTrans = subKeyStr ? `${subKeyStr}[${i}]` : i;
            if(typeof(value) === 'string' || typeof(value) === 'number'){
                this.formData.append(subKeyStrTrans, value);
            }
            else if(typeof(value) === 'object'){
                this.createFormData(value, subKeyStrTrans);
            }
        }
    }

    this.createFormData(obj);
    return this.formData;
}