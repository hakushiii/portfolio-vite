<template>
    <div class="section">
        <div class="box">
            <h3>01001000 01001011 01010011 01001000</h3>
        </div>
        <h2 class="left">Jerome A.</h2>
        <p class="left">Computer Engineer / Junior Software Developer</p>
        <img src="/public/image/king.jpg" class="picture" alt="Profile Picture" />
    </div>
    <div class="section">
        <h3 class="section-head">Work</h3>
            <p>Haven't worked yet, had university projects though.</p>
        <h3 class="section-head">Bio</h3>
            <p>2000</p>
            <p>Spawned in the PH Server</p>
            <p>2019 - 20XX</p>
            <p>Started University taking Bachelor of Science in Computer Engineering</p>
        <h3 class="section-head">SNS</h3>
            <a href="https://www.linkedin.com/in/jerome-christian-alapad-3547631b7/">
                <img class="logo" src="/public/logo/linkedin-logo.svg" alt="LinkedIN" />
            </a>
            <a href="https://github.com/hakushiii">
                <img class="logo" src="/public/logo/github-logo.svg" alt="Github" />
            </a>
            <a href="https://twitter.com/hakushiii_">
                <img class="logo" src="/public/logo/twitter-logo.svg" alt="Twitter" />
            </a>
            
    </div>
    

</template>

<style scoped>
.box {
    background-color: #000;
    border-radius: 1ch;
    padding: 0.01cm;
}
.section {
    background-color: #00000040;
    padding:2ch;
    margin-bottom: 1ch;
    border-radius: 2ch;
}
.section-head {
    color: #888;
    text-decoration-line: underline;
    text-decoration-thickness: 200%;
}
.picture {
    height: 6em;
    width: 6em;
    border-radius: 1.5ch;
}
.logo {
    filter: invert(1);
    height: 5em;
    width: 5em;
    margin-inline: 1em;
}
</style>

<script setup lang="ts">
</script>