document.addEventListener('DOMContentLoaded', function(){

    const path = './dist';
    let counter = 0;

    function copy (select){
        const spans = document.querySelectorAll( select );
        let href = document.location.href;
        href = href.replace('https','http');

        spans.forEach(span => {
            span.onclick = function() {
                document.execCommand("copy");
            }
            let text = span.getAttribute("data-copy") || false;
            text = text.replace('./','');
            text = href + text;
            
            span.addEventListener("copy", function(event) {
                event.preventDefault();
                console.log(text)
                if( text!='' && text ){
                    if (event.clipboardData) {
                        event.clipboardData.setData("text/plain", text);
                    }
                }
            });
        });
    };

    function list( params ){

        // params of function
        let arr = params.arr || false;
        let dir = params.dir || false;
        let format = params.format || false;
        let name = params.name || false;
        let audio = params.audio || false;
        let video = params.video || false;
        let videoAnswer = params.videoAnswer || false;
        let img = params.img || false;

        // variables for function
        let list = '';

        arr.forEach( (element, index) => {

            let videoAns = "";

            if( videoAnswer ){
                videoAns = element.replace("_1", "_2");
            }

            let isVideo = element.indexOf("_video")!==-1 ? true: false ;

            let format2 = audio;

            if( isVideo ){
                format2 = 'mp4';
            }

            let btnCopyVideoAnswer = videoAnswer ? `<span class="copy" data-copy="${path}/${dir}/${videoAns}.${video}">Copy video</span>` : '';
            let btnOpenVideoAnswer = videoAnswer ? `<a href="${path}/${dir}/${videoAns}.${video}" target="_blank">Open video</a>` : '';

            let btnCopyAudio = audio ? `<span class="copy" data-copy="${path}/${dir}/${element}.${format2}">Copy audio</span>` : '';
            let btnOpenAudio = audio ? `<a href="${path}/${dir}/${element}.${format2}" target="_blank">Open audio</a>` : '';

            let btnCopyVideo = video ? `<span class="copy" data-copy="${path}/${dir}/${element}.${video}">Copy video</span>` : '';
            let btnOpenVideo = video ? `<a href="${path}/${dir}/${element}.${video}" target="_blank">Open video</a>` : '';

            let btnCopyImg = img ? `<span class="copy" data-copy="${path}/${dir}/${element}.${format}">Copy img</span>` : '';
            let imgItem = img ? `<img src="${path}/${dir}/${element}.${format}" class="img copy" data-copy="${path}/${dir}/${element}.${format}" />` : '';

            list += `
                    <li data-index="${index+1})">
                        <a href="${path}/${dir}/${element}.${format}" class="first" target="_blank">${element}</a>
                        ${btnCopyAudio}
                        ${btnOpenAudio}
                        ${btnCopyVideo}
                        ${btnOpenVideo}

                        ${imgItem}
                        ${btnCopyImg}

                        ${btnCopyVideoAnswer}
                        ${btnOpenVideoAnswer}
                    </li>
                    `;

            counter++;
        });
        let html = `
                    <div class="item">
                        <h2>${name}</h2>
                        <ol>${list}</ol>
                    </div>
                    `
        document.body.insertAdjacentHTML("beforeend", html);
    }

    /*  */
    let name_01 = "1. Высокоинтеллектуальные вопросы";
    let dir_01 = "01_vysokointellektualnye_voprosy";
    let format_01 = "mp4";
    let arr_01 = [
        'odekolon',
        'nil',
        '1861',
        'mikelandzhelo',
        'nadezhda',
        'aristotel',
        'oves',
        'otkrytki',
        'sokrat',
        'angliya_i_franciya',
        'che_gevara',
        'dzhek_potroshitel',
        'ehvrika',
        'romanovy',
        'konstantinopol',
        'operaciya_barbarossa',
        'skarabej',
        'vavilon',
        '314',
        'kolobok',
        'borodinskoe_srazhenie',
    ]

    let name_02 = "2. Каверы от животных";
    let dir_02 = "06_animals";
    let format_02 = "mp4";
    let arr_02 = [
        'aqua_barbie_girl',
        'gorillaz_clint_eastwood',
        'shakira',
        'imagine_dragons_believer',
        'queen_we_are_the_champions',
        'ramstein_du_hast',
        'diskoteka_avariya_novogodnyaya',
    ]

    let name_03 = "5. Каверы";
    let dir_03 = "02_cover";
    let format_03 = "mp4";
    let arr_03 = [
        'zima_v_serdce',
        'ty_ne_ver_slezam',
        'rozovyj_vecher',
        'ajsberg',
        'mnogotochie',
        'ya_znayu_ty_daleko',
        'kak_mne_byt',

        'lyublyu',
        'a_na_more_belyj_pesok',
        'belaya_noch',
        'pesnya_obo_mne',
        'believe',
        'halo',
        'hochesh',        
    ]


    let name_05 = "5. OST Фильмы/сериалы";
    let dir_05 = "05_ost";
    let format_05 = "mp3";
    let arr_05 = [
        'ameli',
        'matrica',
        'oblivion',
        'tvin_piks',
        'armageddon',
        'rokki',
        'generaly_peschanyh_karerov',

        'sverhestestvennoe',
        'velikij_getsbi',
        'zvezdnye_voiny',
        'igrushka',
        'ultimatum_borna',
        'komissar_reks',
        'lico_so_shramom',
        
        'sumerki',
        'missiya_nevypolnima',
        'telohranitel',
        '50_ottenkov_serogo',
        'ot_zakata_do_rassveta',
        'tancor_disko',
        'beovulf',
    ]

    let name_06 = "6. На каком языке отрывок";
    let dir_06 = "06_lang";
    let format_06 = "mp3";
    let arr_06 = [
        'boevoi_kontinent',
        'studzianki',
        'dudu',
        'myriam_fares',
        'boris_nonte',
        'smeloi',
        '7_seconds',
        
        'aisha',
        'gangnam_style',
        'la_isla_bonita',
        'u_morya_yaponskij',
        'agiel_pyiala',
        'gruzinskaya',
        'mrazish_video',
    ]

    let name_07 = "5. Каверы";
    let dir_07 = "02_cover";
    let format_07 = "mp4";
    let arr_07 = [
        'zima_v_serdce_1',
        'ty_ne_ver_slezam_1',
        'rozovyj_vecher_1',
        'ajsberg_1',
        'mnogotochie_1',
        'ya_znayu_ty_daleko_1',
        'kak_mne_byt_1',

        'lyublyu_1',
        'a_na_more_belyj_pesok_1',
        'belaya_noch_1',
        'pesnya_obo_mne_1',
        'believe_1',
        'halo_1',
        'hochesh_1',
    ]

    let name_08 = "8. Советское кино (м)";
    let dir_08 = "08_sovet";
    let format_08 = "mp3";
    let arr_08 = [
        'dolgaya-doroga-v-dyunah',
        'bolshoe-kosmicheskoe-puteshestvie',
        'ivan-vasilevich-menyaet-professiyu',
        'formula-lyubvi-uno-momento',
        '12-stulev-bileet-moj-parus',
        'sluzhebnyj-roman-utro',
        'est-tolko-mig-zemlya-sannikova',
        
        'sibiriada',
        'tot-samyj-myunhauzen',
        'moj-laskovyj-i-nezhnyj-zver',
        'svoj-sredi-chuzhih-chuzhoj-sredi-svoih',
        'gardemariny-vperyod-doroga',
        '17-mgnovenij-vesny',
        'kopejka-ya-lyublyu-tebya-do-slez',
        
        'usatyj-nyan',
        'tri-mushkitera-pesnya-grafa',
        'moskva-slezam-ne-verit',
        'priklyucheniya-ehlektronika',
        'vyshe-radugi-zurbagan',
        'yunona-i-avos',
        'shmel',
    ]

    let name_09 = "8.4. и 8.7.  Рандом";
    let dir_09 = "09_random";
    let format_09 = "mp3";
    let arr_09 = [
        'plohaya_devochka',
        'shkola7',
    ]

    let name_09_2 = "3. Постеры на минималках";
    let dir_09_2 = "07_postery_na_minimalkah";
    let format_09_2 = "jpg";
    let arr_09_2 = [
        'odin_doma',
        'leon',
        'nachalo',
        'kryostnyj_otec',
        'titanik',
        'forrest_gamp',
        'malysh_na_drajve',
    ]

    let name_09_22 = "4. Произведения";
    let dir_09_22 = "08_proizvedeniya";
    let format_09_22 = "png";
    let arr_09_22 = [
        'alisa_v_strane_chudes',
        'belyj_bim_chyornoe_uho',
        'vojna_i_mir',
        'malenkij_princ',
        'mobi_dik',
        'mumu',
        'prestuplenie_i_nakazanie',
    ]


    let name_04 = "6. Soundrtack";
    let dir_04 = "03_soundrtack";
    let format_04 = "mp3";
    let arr_04 = [
        'on_drakon',
        'moana',
        'angel',
        'zveropolis',
        'zvezdnye_voiny',
        'shrek',
        'papashi',

        'specnaz',
        'master_i_margarita',
        'ubit_bila',
        'korol_lev',
        'dnevnik_bridzhit_dzhons',
        'roki',
        'zakusochnaya_na_kolesah',
    ]

    let name_051 = "7. Знакомое, но кто пел?";
    let dir_051 = "04_znakomoe_no_kto_pel";
    let format_051 = "mp3";
    let arr_051 = [
        'rok_ostrova',
        'pronofilmy',
        'vasya_oblomov',
        'te100steron',
        'goryachij_shokolad',
        'ehlvira',
        'oksana_pochepa_akula',

        'smyslovye_gallyucinacii',
        'rem',
        'mattafix',
        'rozhdestvo',
        'ajdamir_mugu',
        'bozhya_korovka',
        'oskar',

        'matrang',
        'turbomoda',
        'nelly',
        'mariya_rzhevskaya',
        'alena_vysotskaya',
        'mika_nyuton',
        'dj_piligrim',
    ]

    let name_052 = "8. Игры";
    let dir_052 = "09_games";
    let format_052 = "mp3";
    let arr_052 = [
        'street_of_rage',
        'sonic',
        'dzhim_chervyak',
        'kontra',
        'comix_zone',
        'rock_n_roll_racing',
        'studzianki',
    ]

    let list01 = { name: name_01, dir: dir_01, format: format_01, arr: arr_01, video: format_02, }
    list(list01);

    let list02 = { name: name_02, dir: dir_02, format: format_02, arr: arr_02, video: format_02, }
    list(list02);

    
    // let list04 = { name: name_04, dir: dir_04, format: format_04, arr: arr_04, audio: 'mp3', }
    // list(list04);

    // let list05 = { name: name_05, dir: dir_05, format: format_05, arr: arr_05, audio: 'mp3', }
    // list(list05);

    // let list06 = { name: name_06, dir: dir_06, format: format_06, arr: arr_06, audio: 'mp3', }
    // list(list06);

    // let list07 = { name: name_07, dir: dir_07, format: format_07, arr: arr_07, video: format_07, videoAnswer : true,}
    // list(list07);

    // let list08 = { name: name_08, dir: dir_08, format: format_08, arr: arr_08, audio: 'mp3', }
    // list(list08);

    // let list09 = { name: name_09, dir: dir_09, format: format_09, arr: arr_09, audio: 'mp3', }
    // list(list09);

    let list09_2 = { name: name_09_2, dir: dir_09_2, format: format_09_2, arr: arr_09_2, img: 'jpg',}
    list(list09_2);

    let list09_22 = { name: name_09_22, dir: dir_09_22, format: format_09_22, arr: arr_09_22, img: 'png',}
    list(list09_22);

    let list07 = { name: name_07, dir: dir_07, format: format_07, arr: arr_07, video: format_07, videoAnswer : true,}
    list(list07);

    let list04 = { name: name_04, dir: dir_04, format: format_04, arr: arr_04, audio: 'mp3', }
    list(list04);

    let list051 = { name: name_051, dir: dir_051, format: format_051, arr: arr_051, audio: 'mp3', }
    list(list051);

    let list052 = { name: name_052, dir: dir_052, format: format_052, arr: arr_052, audio: 'mp3', }
    list(list052);


    copy('.copy');

    document.body.insertAdjacentHTML("afterbegin", `<h1>${counter}</h1>`);
    document.body.insertAdjacentHTML("beforeend", `<h1>${counter}</h1>`);

});