(() => {
    window.modModLoadController.addLifeTimeCircleHook('Chocolate Factory Mod exportDataZip', {
        exportDataZip: async (zip) => {
            // export data that injected to memory
            return zip;
        }
    })
})();
