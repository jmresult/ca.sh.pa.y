export async function RunScript(s1, s2, b){
    const {PayReal} = await import(b);
    const script = document.createElement('script');
    script.src = s1;
    script.async = true;
    document.head.append(script);
    script.onload = async function bolder(e) {
        await PayReal()
        const script2 = document.createElement('script');
        script2.src = s2;
        document.head.append(script2);
        script2.onload = function reset_it(e) {
            if (document.querySelectorAll('#AppRoot').length > 0) {
                document.getElementById("AppRoot").style.opacity = '1';
            } else {
                document.body.style.opacity = '1';
            }
        }
    }
}