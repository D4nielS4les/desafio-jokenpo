let score = 0;
let balanceWins = 0;

        function computerChoice() {
            const choices = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function showChoiceComputer(computer) {
            const computerChoiceImg = document.getElementById('computer-choice');
            computerChoiceImg.src = `${computer}.png`;
        }

        function updateScoreDisplay() {
            const scoreElement = document.getElementById('score');
            scoreElement.textContent = `Pontos: ${score}`;
        }

        function playerChoice(player) {
            const computer = computerChoice();
            showChoiceComputer(computer);
            let resultText = '';
      

            if (player === computer) {
                resultText = 'Empate!';
                score += 10;
            } else if (
                (player === 'rock' && computer === 'scissors') ||
                (player === 'paper' && computer === 'rock') ||
                (player === 'scissors' && computer === 'paper')
            ) {
                resultText = 'Você venceu!';
                score += 50;
                balanceWins = balanceWins + 1;
            } else {
                resultText = 'Você perdeu!';
                score -= 35;
            }

            const resultElement = document.getElementById('result-text');
            resultElement.textContent = resultText;
            const wins = document.getElementById('win');
            wins.textContent = `Vitórias: ${balanceWins}`;

            updateScoreDisplay();

            let level;

            switch (true) {
                case score < 0:
                    level = 'Perdedor!!';
                    break;
                case score < 10:
                    level = "Ferro";
                    break;
                case score >= 10 && score <= 20:
                    level = "Bronze";
                    break;
                case score >= 21 && score <= 50:
                    level = "Prata";
                    break;
                case score >= 51 && score <= 80:
                    level = "Ouro";
                    break;
                case score >= 81 && score <= 90:
                    level = "Diamante";
                    break;
                case score >= 91 && score <= 100:
                    level = "Lendário";
                    break;
                default:
                    level = "Imortal";
            }

            const levelElement = document.getElementById('level');
            levelElement.textContent = `Nível: ${level}`;
        }