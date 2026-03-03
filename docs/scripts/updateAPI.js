(async () => {
    try {
        const request = await fetch(`https://nekoweb.org/api/site/info/eiafuawn.nekoweb.org`);
        const json = await request.json();

        const updated = new Date(json.updated_at).toLocaleDateString("en-ZA");
        const created = new Date(json.created_at).toLocaleDateString("en-ZA");

        if (document.getElementById("updated"))
            document.getElementById("updated").innerHTML = `${updated}`;
    } catch (error) {
        console.error(error);
    }
})();