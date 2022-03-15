class AnimeRegistry {

      static #Registry = new Array();

      static getRegistry(){
            return this.#Registry;
      }

      static addRegistryEntry(entry){
            this.#Registry.push(entry);
      }

}

class Anime {

      static JujutsuKaisen = new Anime('jujutsu_kaisen', 'Jujutsu Kaisen', 2020, 'Gege Akutami', 'MAPPA', 'Apesar do estudante colegial Yuuji Itadori ter grande força física, ele se inscreve no Clube de Ocultismo. Certo dia, eles encontram um “objeto amaldiçoado” e retiram o selo, atraindo criaturas chamadas de “maldições”.');
      static KimetsuYaiba = new Anime('kimetsu_yaiba', 'Kimetsu no Yaiba', 2019, 'Koyoharu Gotōge', 'Ufotable', 'Em Kimetsu no Yaiba, Tanjiro, um bondoso jovem que ganha a vida vendendo carvão descobre que sua família foi massacrada por um demônio. E, para piorar, Nezuko, sua irmã mais nova e única sobrevivente, também acabou transformada em um demônio.');
      static ShingekiKyojin = new Anime('shingeki_kyojin', 'Shingeki no Kyojin', 2013, 'Hajime Isayama', 'MAPPA', 'Para escapar dos titãs, gigantes devoradores de homens, a humanidade se refugiou em cidades cercadas por enormes muralhas. Quando eles voltam a atacar, Eren Yeager se junta à luta para combater as criaturas.');

      constructor(id, name, year, author, studio, description){
            this.id = id;
            this.name = name;
            this.year = year;
            this.author = author;
            this.studio = studio;
            this.description = description;
            AnimeRegistry.addRegistryEntry(this);
      }

}

const Registry = AnimeRegistry.getRegistry();

const a_id = './img/poster/'+Registry[localStorage.getItem('selected')].id+'.png';
const a_name = Registry[localStorage.getItem('selected')].name;
const a_year = Registry[localStorage.getItem('selected')].year;
const a_author = Registry[localStorage.getItem('selected')].author;
const a_studio = Registry[localStorage.getItem('selected')].studio;
const a_description = Registry[localStorage.getItem('selected')].description;

function setFields(){
      document.getElementById('anime_img').src = a_id;
      document.getElementById('anime_name').textContent = a_name;
      document.getElementById('anime_year').textContent = a_year;
      document.getElementById('anime_author').textContent = a_author;
      document.getElementById('anime_studio').textContent = a_studio;
      document.getElementById('anime_description').textContent = a_description;
}