function initChocolateConstants() {
    // 作为商品购买的巧克力
    V.chocolate = {
        special: {  // 有门票的巧克力，最多持有一块
            max: 1,
            min: 0,
            price: 10
        },
        normal: {
            max: 52000,
            min: 0,
            price: 10
        }
    };
}

window.initChocolateConstants = initChocolateConstants;

function initChocolateVariables() {
    if (!V.chocolateCounts) {
        V.chocolateCounts = {
            special: 0,
            normal: 0
        };
    } else {
        if (!V.chocolateCounts.special) {
            V.chocolateCounts.special = 0;
        }

        if (!V.chocolateCounts.normal) {
            V.chocolateCounts.normal = 0;
        }
    }
}

window.initChocolateVariables = initChocolateVariables;