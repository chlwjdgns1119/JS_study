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
    })
    nickname: string;

    @Column({
        unique: true,
        readonly: true,
        nullable: true,
    })
    login_id: string;

    @Column({
        nullable: true,
    })
    password: string;

    @Column({
        nullable: true
    })
    phone: number;

    @Column({
        nullable: true
    })
    email: string;

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
        readonly: true,
        type: 'timestamp'
    })
    createdat: Date;

    @UpdateDateColumn({
        type: 'timestamp'
    })
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