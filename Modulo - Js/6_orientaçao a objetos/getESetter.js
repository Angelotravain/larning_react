// getters e setters

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    get exibirTags() {
        return this.tags;
    }

    set adicionarTags(tags) {
        const tagArray = tags.split(', ');
        this.tags = tagArray;
    }
}

const myPost = new Post('algum post', 'É um post sobre programação', 'tag');

console.log(myPost);

myPost.adicionarTags = "livro, programa, ligação, metodo, desenvolvimento";

console.log(myPost.exibirTitulo);

console.log(myPost.exibirTags);


// herança

