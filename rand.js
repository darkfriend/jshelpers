function rand(min=0,max=99999) {
    return Math.floor(Math.random() * Date.now() * (max - min + 1)) + min;
}