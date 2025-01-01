import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StateEnum } from '../const/state.const';
import { RolesEnum } from '../const/roles.const';
import { SignupEnum } from '../const/signup.const';

@Entity()
export class UsersModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
        readonly: true
    })
    nickname: string;

    @Column({
        unique: true,
        readonly: true
    })
    login_id: string;

    @Column({
        unique: true
    })
    password: string;

    @Column({
        nullable: true
    })
    phone: number;

    @Column({
        enum: Object.values(StateEnum),
        default: StateEnum.Active,
    })
    state: StateEnum;

    @Column({
        enum: Object.values(RolesEnum),
        readonly: true
    })
    role: RolesEnum;

    @CreateDateColumn({
        readonly: true
    })
    createdat: Date;

    @UpdateDateColumn()
    updatedat: Date;

    @Column()
    lastlogin: Date;

    @Column({
        default: false
    })
    islock: boolean;

    @Column({
        enum: Object.values(SignupEnum)
    })
    signup_method: SignupEnum;
}