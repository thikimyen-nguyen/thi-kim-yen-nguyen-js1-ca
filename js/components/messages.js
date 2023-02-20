function message(type = "success", message ="") {
    return `<div class ="message_${type}">${message}</div>`;
}
