new Vue({
    el:"#vue-app",
    data:{
        name: "Chris",
        job: "Frontend Developer",
        website: "kurisulim.io",
        websiteTag: "<a href='kurisulim.io'>Chris Lim</a>"
    },
    methods:{
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});

new Vue ({
    el:"#something",
    data:{
        name: "John Doe",
        job: "Panhandler"
    },
    methods:{
        beg: function(money){
            return 'Spare some ' + '$ ' + money + '?'
        }
    }
});

new Vue ({
    el:"#age",
    data:{
        age: 25,
        x: 0,
        y: 0
    },
    methods:{
        add: function(inc){
            this.age+=inc;
        },
        subtract: function(dec){
            this.age-=dec;
        },
        updateXY: function(event){
            this.x =event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert("You click me");
        }
    }
});
new Vue ({
    el:"#keyboard-event",
    data:{
        name: "",
        age: ""
    },
    methods:{
        logName: function(){
            console.log("You entered your name")
        },
        logAge: function(){
            console.log("You entered your age")
        }
    }
})

new Vue ({
    el:"#computed-properties",
    data:{
        age: 20,
        a: 0,
        b: 0
    },
    // methods:{
    //     addToA: function(){
    //         return this.a + this.age
    //     },
    //     addToB: function(){
    //         return this.b + this.age
    //     }
    // },
    computed:{
        addToA: function(){
            console.log('addToA');
            return this.a + this.age
        },
        addToB: function(){
            console.log('addToB');
            return this.b + this.age
        }
    }
})
new Vue ({
    el:"#dynamicCSS",
    data:{
        available: false,
        nearby: false
    },
    methods:{

    },
    computed:{
        compClasses: function(){
        return{
            available: this.available,
            nearby: this.nearby
        } 
        }
    }
})