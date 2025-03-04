import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('placas')
export class Placa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index() 
  @Column({ unique: true, length: 10, nullable: false })
  placa: string;

  @Column({ length: 50, nullable: false })
  marca: string;

  @Column({ type: 'int', nullable: false })
  modelo: number;

  @Column({ length: 30, nullable: false })
  color: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_ingreso: Date;
}