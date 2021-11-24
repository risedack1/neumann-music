;
(function () {
    // -----------------------------------------------
    CalamansiEvents.on('initialized', function (instance) {
        var player = instance.el;

        if (player.matches('.calamansi-skin--calamansi-compact')) {
            if (document.querySelectorAll(`script[src="https://unpkg.com/simplebar@4.2.3/dist/simplebar.min.js"]`).length == 0) {
                var script = document.createElement('script');
                script.setAttribute('src', 'https://unpkg.com/simplebar@4.2.3/dist/simplebar.min.js');
                script.setAttribute('type', 'text/javascript');
                document.querySelector('head').appendChild(script);
            }

            player.querySelectorAll('.calamansi-skin--calamansi-compact .clmns--toggle-playlist').forEach(function (el) {
                el.addEventListener('click', function (e) {
                    player.classList.toggle('clmns--show-playlist');
                });
            });

            var controls = player.querySelector('.clmns--controls');

            if (controls.offsetWidth < 300) {
                controls.classList.add('clmns--compact');
            }
        }
    });
    const volumeBtn = document.querySelectorAll('.clmns--volume-btn');

    volumeBtn.forEach(el => {
        const toggleVolume = function () {
            el.classList.toggle('clmns--volume-btn-active');
        }

        console.log(el.childNodes);

        el.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleVolume();
        });

        document.addEventListener('click', function (e) {
            const target = e.target;
            const istVolumeBtn = target == el || el.contains(target);
            const volumeActive = el.classList.contains('clmns--volume-btn-active');
            const volumeChild = el.childNodes;
            const isVolumeChild = target == volumeChild;

            if (volumeActive && !isVolumeChild) {
                toggleVolume();
            }
        });
    });
})();