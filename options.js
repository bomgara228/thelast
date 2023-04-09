        let butt = document.getElementById('myOpt');
        let cloes = document.getElementsByClassName('clos')[0];
        let medal = document.getElementById('opt');
        let res = document.querySelector('.restart');
        let ofcorse = document.querySelector('.tosno');

        butt.onclick = function() {
            medal.style.display = 'block';
        }

        cloes.onclick = function() {
            medal.style.display = 'none';
            ofcorse.style.display = 'none';
        }

        window.onclick = function(e){
            if (e.target == medal){
                medal.style.display = 'none'
                ofcorse.style.display = 'none';
            }
        }

        res.onclick = function(e){
            if (e.target == res){
                res.style.width = '18vw';
                res.style.fontsize = '1vw';
                ofcorse.style.display = 'block';
                setTimeout(() => {
                    res.style.width = '20vw';
                    res.style.fontsize = '2vw';
                }, 100);
            }
        }