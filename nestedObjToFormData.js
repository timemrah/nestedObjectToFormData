function nestedObjToFormData(obj, formData = new FormData()){

    nestedObjToFormData.formData = formData;

    const createFormData = function(obj, subKeyStr = ''){
        for(let i in obj){
            let value = obj[i];
            let subKeyStrTrans = subKeyStr ? `${subKeyStr}[${i}]` : i;
            if(typeof(value) === 'string' || typeof(value) === 'number'){
                nestedObjToFormData.formData.append(subKeyStrTrans, value);
            }
            else if(typeof(value) === 'object'){
                createFormData(value, subKeyStrTrans);
            }
        }
    }

    createFormData(obj);
    return nestedObjToFormData.formData;
}
