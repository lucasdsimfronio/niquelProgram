const modalElement = document.getElementById("transaction-modal");
const myModal = modalElement ? new bootstrap.Modal(modalElement) : null;

let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = { transactions: [] };

document.getElementById("logout-button").addEventListener("click", logout);
document.getElementById("transaction-button").addEventListener("click", function () {
    window.location.href = "transactions.html";
});
document.getElementById("transaction-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({ value, type, description, date });
    saveData(data);
    event.target.reset();

    if (myModal) {
        myModal.hide();
    }

    renderHome();
    alert("Lançamento adicionado com sucesso!");
});

function checkLogged() {
    // A sessão persistente é copiada para a sessão da aba quando o usuário opta por permanecer conectado.
    if (session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if (!logged) {
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if (dataUser) {
        data = JSON.parse(dataUser);
    }

    renderHome();
}

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    window.location.href = "index.html";
}

function renderHome() {
    getCashIn();
    getCashOut();
    getTotal();
}

function getCashIn() {
    const cashIn = data.transactions.filter((item) => item.type === "1");
    // A home exibe no máximo cinco itens para manter o resumo compacto.
    const visibleTransactions = cashIn.slice(0, 5);
    const cashInHtml = visibleTransactions.map((item) => `
        <div class="row mb-4">
            <div class="col-12">
                <h3 class="fs-2">R$ ${item.value.toFixed(2)}</h3>
                <div class="container p-0">
                    <div class="row">
                        <div class="col-12 col-md-8">
                            <p class="text-muted">${escapeHtml(item.description)}</p>
                        </div>
                        <div class="col-12 col-md-3 d-flex justify-content-end">
                            <p class="text-muted">${item.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`).join("");

    document.getElementById("cashInList").innerHTML = cashInHtml;
}

function getCashOut() {
    const cashOut = data.transactions.filter((item) => item.type === "2");
    const visibleTransactions = cashOut.slice(0, 5);
    const cashOutHtml = visibleTransactions.map((item) => `
        <div class="row mb-4">
            <div class="col-12">
                <h3 class="fs-2">R$ ${item.value.toFixed(2)}</h3>
                <div class="container p-0">
                    <div class="row">
                        <div class="col-12 col-md-8">
                            <p class="text-muted">${escapeHtml(item.description)}</p>
                        </div>
                        <div class="col-12 col-md-3 d-flex justify-content-end">
                            <p class="text-muted">${item.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`).join("");

    document.getElementById("cashOutList").innerHTML = cashOutHtml;
}

function getTotal() {
    const total = data.transactions.reduce((balance, item) => {
        const value = Number(item.value);
        return item.type === "1" ? balance + value : balance - value;
    }, 0);

    document.getElementById("total").textContent = `R$ ${total.toFixed(2)}`;
}

function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

// As descrições vêm do usuário e precisam ser escapadas antes de serem inseridas com innerHTML.
function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

checkLogged();
