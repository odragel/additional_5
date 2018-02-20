module.exports = function check(str, bracketsConfig) {
    var openedBrackets=[];
    for (var i = 0; i < str.length; i++) {
        var temp = str.charAt(i);
        var isOpened = 0;
        debugger;
        for (var j = 0; j < bracketsConfig.length; j++){
            if (temp == bracketsConfig[j][0]){

                isOpened = 1;
                if(bracketsConfig[j][0] == bracketsConfig[j][1]){
                    if(openedBrackets.length > 0){
                        if(openedBrackets[openedBrackets.length-1]!= temp){
                            openedBrackets.push(temp);
                        }else{
                            openedBrackets.pop();
                        }
                    }
                }
                else{
                    openedBrackets.push(temp);
                }
                break;
            }
        }
        if(!isOpened){
            for (var j = 0; j < bracketsConfig.length; j++){
                if (temp == bracketsConfig[j][1]){
                    if (openedBrackets[openedBrackets.length-1] == bracketsConfig[j][0]){
                        openedBrackets.pop();
                        break;
                    }else{
                        return false;
                    }
                }
            }
        }

    }
    if (openedBrackets.length == 0){
        return true;
    }else {
        return false;
    }
}
