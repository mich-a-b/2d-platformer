const playerAnimations = {
    idle :{
        frameBuffer: 20,
        images: [
            './img/player/01_idle/idle_1.png',
            './img/player/01_idle/idle_2.png',
            './img/player/01_idle/idle_3.png',
            './img/player/01_idle/idle_4.png',
            './img/player/01_idle/idle_5.png',
            './img/player/01_idle/idle_6.png',
            './img/player/01_idle/idle_7.png',
            './img/player/01_idle/idle_8.png'
        ]
    },
    run: {
        frameBuffer: 20,
        images: [
            './img/player/02_run/run_1.png',
            './img/player/02_run/run_2.png',
            './img/player/02_run/run_3.png',
            './img/player/02_run/run_4.png',
            './img/player/02_run/run_5.png',
            './img/player/02_run/run_6.png',
            './img/player/02_run/run_7.png',
            './img/player/02_run/run_8.png'
        ]
    },
    jump: {
        frameBuffer: 5,
        images: [
            './img/player/03_jump/jump_1.png',
            './img/player/03_jump/jump_2.png',
            './img/player/03_jump/jump_3.png',
            './img/player/03_jump/jump_4.png',
            './img/player/03_jump/jump_5.png',
            './img/player/03_jump/jump_6.png',
            './img/player/03_jump/jump_7.png',
            './img/player/03_jump/jump_8.png',
            './img/player/03_jump/jump_9.png',
            './img/player/03_jump/jump_10.png',
            './img/player/03_jump/jump_11.png',
            './img/player/03_jump/jump_12.png',
            './img/player/03_jump/jump_13.png',
            './img/player/03_jump/jump_14.png',
            './img/player/03_jump/jump_15.png',
            './img/player/03_jump/jump_16.png',
            './img/player/03_jump/jump_17.png',
            './img/player/03_jump/jump_18.png',
            './img/player/03_jump/jump_19.png',
            './img/player/03_jump/jump_20.png'
        ]
    },
    jump_down: {
        frameBuffer: 25,
        images: [
            './img/player/03_jump_down/jump_down_1.png',
            './img/player/03_jump_down/jump_down_2.png',
            './img/player/03_jump_down/jump_down_3.png'
        ]
    },
    jump_up: {
        frameBuffer: 25,
        images: [
            './img/player/03_jump_up/jump_up_1.png',
            './img/player/03_jump_up/jump_up_2.png',
            './img/player/03_jump_up/jump_up_3.png'
        ]
    },
    roll: {
        frameBuffer: 1.0,
        images: [
            './img/player/04_roll/roll_1.png',
            './img/player/04_roll/roll_2.png',
            './img/player/04_roll/roll_3.png',
            './img/player/04_roll/roll_4.png',
            './img/player/04_roll/roll_5.png',
            './img/player/04_roll/roll_6.png',
            './img/player/04_roll/roll_7.png',
            './img/player/04_roll/roll_8.png'
        ]
    },
    atk_1: {
        frameBuffer: 1.0,
        images: [
            './img/player/05_1_atk/1_atk_1.png',
            './img/player/05_1_atk/1_atk_2.png',
            './img/player/05_1_atk/1_atk_3.png',
            './img/player/05_1_atk/1_atk_4.png',
            './img/player/05_1_atk/1_atk_5.png',
            './img/player/05_1_atk/1_atk_6.png',
            './img/player/05_1_atk/1_atk_7.png',
            './img/player/05_1_atk/1_atk_8.png',
            './img/player/05_1_atk/1_atk_9.png',
            './img/player/05_1_atk/1_atk_10.png',
            './img/player/05_1_atk/1_atk_11.png'
        ]
    },
    atk_2: {
        frameBuffer: 1.0,
        images: [
            './img/player/06_2_atk/2_atk_1.png',
            './img/player/06_2_atk/2_atk_2.png',
            './img/player/06_2_atk/2_atk_3.png',
            './img/player/06_2_atk/2_atk_4.png',
            './img/player/06_2_atk/2_atk_5.png',
            './img/player/06_2_atk/2_atk_6.png',
            './img/player/06_2_atk/2_atk_7.png',
            './img/player/06_2_atk/2_atk_8.png',
            './img/player/06_2_atk/2_atk_9.png',
            './img/player/06_2_atk/2_atk_10.png',
            './img/player/06_2_atk/2_atk_11.png',
            './img/player/06_2_atk/2_atk_12.png',
            './img/player/06_2_atk/2_atk_13.png',
            './img/player/06_2_atk/2_atk_14.png',
            './img/player/06_2_atk/2_atk_15.png',
            './img/player/06_2_atk/2_atk_16.png',
            './img/player/06_2_atk/2_atk_17.png',
            './img/player/06_2_atk/2_atk_18.png',
            './img/player/06_2_atk/2_atk_19.png'
        ]
    },
    atk_3: {
        frameBuffer: 1.0,
        images: [
            './img/player/07_3_atk/3_atk_1.png',
            './img/player/07_3_atk/3_atk_2.png',
            './img/player/07_3_atk/3_atk_3.png',
            './img/player/07_3_atk/3_atk_4.png',
            './img/player/07_3_atk/3_atk_5.png',
            './img/player/07_3_atk/3_atk_6.png',
            './img/player/07_3_atk/3_atk_7.png',
            './img/player/07_3_atk/3_atk_8.png',
            './img/player/07_3_atk/3_atk_9.png',
            './img/player/07_3_atk/3_atk_10.png',
            './img/player/07_3_atk/3_atk_11.png',
            './img/player/07_3_atk/3_atk_12.png',
            './img/player/07_3_atk/3_atk_13.png',
            './img/player/07_3_atk/3_atk_14.png',
            './img/player/07_3_atk/3_atk_15.png',
            './img/player/07_3_atk/3_atk_16.png',
            './img/player/07_3_atk/3_atk_17.png',
            './img/player/07_3_atk/3_atk_18.png',
            './img/player/07_3_atk/3_atk_19.png',
            './img/player/07_3_atk/3_atk_20.png',
            './img/player/07_3_atk/3_atk_21.png',
            './img/player/07_3_atk/3_atk_22.png',
            './img/player/07_3_atk/3_atk_23.png',
            './img/player/07_3_atk/3_atk_24.png',
            './img/player/07_3_atk/3_atk_25.png',
            './img/player/07_3_atk/3_atk_26.png',
            './img/player/07_3_atk/3_atk_27.png',
            './img/player/07_3_atk/3_atk_28.png'
        ]
    },
    sp_atk: {
        frameBuffer: 1.0,
        images: [
            './img/player/08_sp_atk/sp_atk_1.png',
            './img/player/08_sp_atk/sp_atk_2.png',
            './img/player/08_sp_atk/sp_atk_3.png',
            './img/player/08_sp_atk/sp_atk_4.png',
            './img/player/08_sp_atk/sp_atk_5.png',
            './img/player/08_sp_atk/sp_atk_6.png',
            './img/player/08_sp_atk/sp_atk_7.png',
            './img/player/08_sp_atk/sp_atk_8.png',
            './img/player/08_sp_atk/sp_atk_9.png',
            './img/player/08_sp_atk/sp_atk_10.png',
            './img/player/08_sp_atk/sp_atk_11.png',
            './img/player/08_sp_atk/sp_atk_12.png',
            './img/player/08_sp_atk/sp_atk_13.png',
            './img/player/08_sp_atk/sp_atk_14.png',
            './img/player/08_sp_atk/sp_atk_15.png',
            './img/player/08_sp_atk/sp_atk_16.png',
            './img/player/08_sp_atk/sp_atk_17.png',
            './img/player/08_sp_atk/sp_atk_18.png'
        ]
    },
    defend: {
        frameBuffer: 1.0,
        images: [
            './img/player/09_defend/defend_1.png',
            './img/player/09_defend/defend_2.png',
            './img/player/09_defend/defend_3.png',
            './img/player/09_defend/defend_4.png',
            './img/player/09_defend/defend_5.png',
            './img/player/09_defend/defend_6.png',
            './img/player/09_defend/defend_7.png',
            './img/player/09_defend/defend_8.png',
            './img/player/09_defend/defend_9.png',
            './img/player/09_defend/defend_10.png'
        ]
    },
    take_hit: {
        frameBuffer: 1.0,
        images: [
            './img/player/10_take_hit/take_hit_1.png',
            './img/player/10_take_hit/take_hit_2.png',
            './img/player/10_take_hit/take_hit_3.png',
            './img/player/10_take_hit/take_hit_4.png',
            './img/player/10_take_hit/take_hit_5.png',
            './img/player/10_take_hit/take_hit_6.png'
        ]
    },
    death: {
        frameBuffer: 1.0,
        images: [
            './img/player/11_death/death_1.png',
            './img/player/11_death/death_2.png',
            './img/player/11_death/death_3.png',
            './img/player/11_death/death_4.png',
            './img/player/11_death/death_5.png',
            './img/player/11_death/death_6.png',
            './img/player/11_death/death_7.png',
            './img/player/11_death/death_8.png',
            './img/player/11_death/death_9.png',
            './img/player/11_death/death_10.png',
            './img/player/11_death/death_11.png',
            './img/player/11_death/death_12.png',
            './img/player/11_death/death_13.png'
        ]
    },
    air_atk: {
        frameBuffer: 1.0,
        images: [
            './img/player/air_atk/air_atk_1.png',
            './img/player/air_atk/air_atk_2.png',
            './img/player/air_atk/air_atk_3.png',
            './img/player/air_atk/air_atk_4.png',
            './img/player/air_atk/air_atk_5.png',
            './img/player/air_atk/air_atk_6.png',
            './img/player/air_atk/air_atk_7.png',
            './img/player/air_atk/air_atk_8.png'
        ]
    } 
};
