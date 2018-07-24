    
    var getAttacker = function() {
    if(Math.random() >= 0.5) {
        return 'left';
    } else {
        return 'right';
        }
    }
    
    var getGoal = function() {
    if(Math.random() >= 0.5) {
        return true;
    } else {
        return false;
        }
    }
    
    function Goal() {
        let attacker = getAttacker();
        let goal = getGoal();
        console.log('Attacker: ' + attacker + '.   goal: ' + goal + '.')
        if(goal == true) {
            svgs = document.getElementsByClassName("svgGoal_" + attacker);
            for(i = 0; i< svgs.length; i++) {
                svgs[i].beginElement();
            }
            document.getElementById('all').classList.add('getPoint_' + attacker); 
            setTimeout(function(){ document.getElementById('all').classList.remove('getPoint_' + attacker); }, 5000);
            setTimeout(function(){document.getElementById('point_' + attacker).innerHTML = parseInt(document.getElementById('point_' + attacker).innerHTML, 10) + 1; }, 1250);
                      
        } else {
            document.getElementById('all').classList.add('fail_' + attacker);
            setTimeout(function(){ document.getElementById('all').classList.remove('fail_' + attacker); }, 5000);
            }
    }
    




