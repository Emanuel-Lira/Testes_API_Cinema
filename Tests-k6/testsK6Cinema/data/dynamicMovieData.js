// Função para gerar um nome de usuário aleatório
export class DynamicMovieData {
    constructor() {
        let movieName = this.generateRandomUsername();
        
        let movie = {
            title: movieName,
            description: this.generateRandomEmail(movieName),
            launchdate: Date.now(),
            showtimes: Date.toString()
        };
        return movie
    }



    generateRandomUsername() {
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        const length = 30;
        let username = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            username += chars.charAt(randomIndex);
        }

        return username;
    }


    // Função para gerar um endereço de email aleatório

    generateRandomEmail(username) {
        const domains = ["example.com", "test.com", "domain.com"];
    
        // Escolher um domínio aleatório
        const domain = domains[Math.floor(Math.random() * domains.length)];
    
        return `${username}@${domain}`;
    }
    }