function nestedObjToFormData(obj, formData = new FormData()){

    let delegateFormData = formData;

    const createFormData = function(obj, subKeyStr = ''){
        for(let i in obj){
            let value = obj[i];
            let subKeyStrTrans = subKeyStr ? `${subKeyStr}[${i}]` : i;
            if(typeof(value) === 'string' || typeof(value) === 'number'){
                delegateFormData.append(subKeyStrTrans, value);
            }
            else if(typeof(value) === 'object'){
                createFormData(value, subKeyStrTrans);
            }
        }
    }

    createFormData(obj);
    return delegateFormData;
}
