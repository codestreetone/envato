function drop(val) {
    if (val === 1) {
        document.getElementById('allitem-nav').style.display = "block";
        document.getElementById('wordpress-nav').style.display = "none";
        document.getElementById('elementor-nav').style.display = "none";
        document.getElementById('hosting-nav').style.display = "none";
    }
    else if (val === 2) {
        document.getElementById('allitem-nav').style.display = "none";
        document.getElementById('wordpress-nav').style.display = "block";
        document.getElementById('elementor-nav').style.display = "none";
        document.getElementById('hosting-nav').style.display = "none";
    }
    else if (val === 3) {
        document.getElementById('allitem-nav').style.display = "none";
        document.getElementById('wordpress-nav').style.display = "none";
        document.getElementById('elementor-nav').style.display = "block";
        document.getElementById('hosting-nav').style.display = "none";
    }
    else if (val === 4) {
        document.getElementById('allitem-nav').style.display = "none";
        document.getElementById('wordpress-nav').style.display = "none";
        document.getElementById('elementor-nav').style.display = "none";
        document.getElementById('hosting-nav').style.display = "block";
    }
}