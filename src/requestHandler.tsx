const formElement: HTMLFormElement | null = document.querySelector("#infoForm");

formElement?.addEventListener("submit", (event) => {
    event?.preventDefault();
    
    const formData: FormData = new FormData(formElement);
    const data: URLSearchParams | null = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
        data.append(key, value as string); 
    }

    console.log(data);
})