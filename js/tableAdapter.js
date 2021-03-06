class TableAdapter {

    constructor(array, title) {
        this.array = array
        this.title = title
    }

    getViewTable(columns) {
        let rez = `
        <div class="mw-50">
            <table class="table table-bordered caption-top">
                <caption>${this.title}</caption>`
        rez += `
        <thead class="table-primary">
            <tr>`
        columns.forEach(col => {
            rez += `<th scope="col">${col}</th>`
        })
        rez +=
            `</tr>
        </thead>`
        ///////////////////////////
        rez += `<tbody>`
        this.array.forEach(item => {
            rez += "<tr>"
            columns.forEach(col => {
                rez += `<td>${item[col]}</td>`
            })
            rez += "</tr>"
        })
        return rez + `</tbody>
            </table>
        </div>`
    }

    getDropDownList(column) {
        let rez = ''
        rez += `<select class="form-select form-select-sm" aria-label="Оберіть із списку">`
        this.array.forEach(item => {
            rez += `<option>${item[column]}</option>`
        })
        return rez + `</select>`
    }

    getNewsItem(role) {
        let rez = ""
        this.array.forEach(item => {
            let newsContent = item['content'].substr(0, 200) + "..."
            rez += `
                <div id="${item["id"]}" class="card mb-3" style="max-width: 1080px;">
                <div class="row g-0">
                    <div class="col-lg-4">
                        <img
                            src="${item["image"]}"
                            class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <div class="header">
                                <h5 class="card-title">${item["title"]}</h5>
                            </div>

                            <p class="card-text">${newsContent}</p>
                            <p class="card-text"><small class="text-muted">${item["date"]}</small></p>
                            <a type="button" href="../pages/news_page.php?id=${item['id']}" class="btn btn-primary">Переглянути</a type="button">
                            `;
            if (role == 1)
                rez +=
                    `
                            <button type="button" onclick="deleteNews(${item["id"]})" class="btn btn-outline-danger ">
                                <i class="fa-solid fa-bucket"></i>
                            </button>
                            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editNewsModal" data-bs-whatever="${item["id"]}">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            `;
            rez +=
                `
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        return rez
    }

    getTeacherItem(role) {
        let rez = ""
        this.array.forEach(item => {
            //let newsContent = item['content'].substr(0, 200) + "..."
            rez += `
                <div class="col">
                    <div id="${item['id']}" class="card h-100">
                        <div class="card-img d-flex justify-content-center"   >   
<!--                    --> <img style="
                                width:auto;
                                height:330px;"
                            src="${item['photo']}" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${item['pib']}</h5>
                            <p class="fst-italic">${item['position']}</p>
                            <p class="card-text">${item['description']}</p>
                            <a href="../pages/teacher_page.php?teacher=${item['id']}" class="btn btn-primary">Переглянути</a>
                     
                            `;
            if (role == 1)
                rez +=
                    `
                            <button type="button" onclick="deleteTeacher(${item["id"]})" class="btn btn-outline-danger ">
                                <i class="fa-solid fa-bucket"></i>
                            </button>
                            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editTeacherModal" data-bs-whatever="${item["id"]}">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            `;
            rez +=
                ` </div>
                    </div>
                </div>
            </div>
            `
        })
        return rez
    }
}