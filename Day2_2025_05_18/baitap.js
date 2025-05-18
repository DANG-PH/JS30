{
    //bai1
    function fibo(n){
        if (n===0){return 0}
        if (n===1){return 1}
        let a=0;let b=1;
        for (let i=1;i<=n-2;i++){
            let tong=a+b;
            a=b;
            b=tong;
        }
        return b
    }
    console.log('bai1',fibo(parseInt(prompt('bai1'))))
    // tai sao for n-2 lan ? bởi vì nếu có n số thì sẽ có n-1 cặp số và để cặp số đầu thành cặp số cuối thì ta cần n-2 lệnh gángán
}
{
    //bai2
    function daonguoc(str){
        kq='';
        for (let i=str.length-1;i>=0;i--){
            kq+=str[i];
        }
        return kq
    }
    console.log('bai2',daonguoc(prompt('bai2')))
    // for từ cuối lên đầu 
}
{
    //bai3
    function lanamnhuan(nam){
        if (nam%400===0){console.log('nam nhuan');return;}
        if (nam%4===0 && nam%100!=0 ){console.log('nam nhuan');return;}
        console.log('khong phai nam nhuan');
        return
    }
    lanamnhuan(parseInt(prompt('bai3')))
    //kiem tra nam nhuan
}
{
    //bai4
    function ktramk(mk){
        if (mk.length>=8 && /[A-Z]/.test(mk) && /[a-z]/.test(mk) && /\d/.test(mk)){
            console.log('mk manh');return
        }
        else {
            console.log('mk yeu');return
        }
    }
    ktramk(prompt('bai4'))
    //cach xai bieu thuc chinh quy
}
{
    //bai 4 cach 2
    function ktramk(mk){
        if (mk.length<8){return false}
        let hoa=false;
        let thuong=false;
        let so=false;
        for (let i=0;i<mk.length;i++){
            let kytu=mk[i]
            if (kytu>='A' && kytu <= 'Z'){hoa=true}
            else if (kytu>='a' && kytu <= 'z'){thuong=true}
            else if (kytu>='0' && kytu <= '9'){so=true}
        }
        if (hoa && thuong && so){return true}
    }
    console.log(ktramk(prompt('bai4 cach 2')))
}