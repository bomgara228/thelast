        let butn = document.getElementById('myButton');
        let modal = document.getElementById('myModal');
        let getin = document.querySelector('.modal-content');
        let clos = document.getElementsByClassName('close')[0];
        
        butn.onclick = function() {
            modal.style.display = 'block';
        }

        clos.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(e){
            if (e.target == modal){
                modal.style.display = 'none'
            }
        }
        
        let vseprok = [
            {
                name:'Сделайте 100 кликов',
                nagrad: 'Дает множитель 0.5',
                phot:'1d.jpg',
                reqc:100,
                get: 0,
                go: 0.5
            },
            {
                name:'Сделайте 1000 кликов',
                nagrad:'Дает множитель 1',
                phot:'2d.jpg',
                reqc:1000,
                get: 0,
                go: 1
            },
            {
                name:'Сделай 10000 кликов',
                nagrad:'Дает множитель 3',
                phot:'3d.jpg',
                reqc:10000,
                get: 0,
                go: 3
            }
        ];
        
        gtfa(vseprok);
        function gtfa(arr){
            for (item of arr){
                let div = document.createElement('div');
                let diiv = document.createElement('div');
                let img = document.createElement('img');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let byt = document.createElement('button');
                
                div.style.border = '0.3vw solid black'
                div.style.borderRadius = '5%';
                div.style.margin = '1vw';
                byt.style.margin = '0 1vw 0 0'
                byt.style.float = 'right';
                byt.style.display = 'none';
                if ((item.reqc <= statistic.clicked || item.reqt <= statistic.timeInGame) && item.get == 0){
                    byt.style.display = 'block';
                }
                byt.onclick = function(){
                        mnoz += item.go;
                        tm.innerText = `Множитель клика: ${mnoz.toFixed(2)}`;
                        ct.innerText = `Денег с клика: ${(mnoz * upg).toFixed(0)}`;
                        item.get++;
                        byt.style.display = 'none';
                }
                byt.innerText = 'Забрать';
                diiv.classList.add('ramkas')
                img.classList.add('inimg');
                img.src = item.phot;
                h2.innerHTML = item.name;
                h3.innerHTML = item.nagrad;

                getin.append(div);
                div.append(h2);
                div.append(h3);
                diiv.append(img);
                diiv.append(byt);
                div.append(diiv);
                
            }
        }