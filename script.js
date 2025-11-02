document.addEventListener('DOMContentLoaded', () => {
    const saveContactBtn = document.getElementById('saveContactBtn');
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', () => {
            const vCardData = [
                'BEGIN:VCARD',
                'VERSION:3.0',
                'N:Ranga;Srivardhan;;;',
                'FN:Srivardhan Ranga',
                'ORG:Vagdevi Food Products Private Limited',
                'TEL;TYPE=CELL,VOICE:+919866689944',
                'EMAIL;TYPE=INTERNET,PREF:srivardhan@vagdevifoods.com',
                'URL;TYPE=WORK:https://vagdevifoods.com/',
                'URL:https://www.linkedin.com/in/srivardhan-ranga/',
                'ADR;TYPE=WORK:;;Vagdevi Food Products, Yadgarpalle;Miryalaguda;Telangana;508207;India',
                'END:VCARD'
            ].join('\n');

            const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'SrivardhanRanga.vcf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
