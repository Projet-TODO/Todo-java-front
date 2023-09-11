package com.takima.backskeleton.models;

import jakarta.persistence.*;

import java.time.Instant;
import java.util.List;

@Entity
@Table(name= "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    private Instant birthdate;
    @ManyToMany(mappedBy="student")
    @JoinTable(
            name = "student_course",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    private List<Course> courses;
    @ManyToOne()
    @JoinColumn(name = "major_id")
    private Major major;

    private Student(Builder builder) {
        this.id = builder.id;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.birthdate = builder.birthdate;
        this.courses = builder.courses;
        this.major = builder.major;
    }
    public Student(){
    }

    public static class Builder {
        private final Long id;
        private String firstName;
        private String lastName;
        private Instant birthdate;
        private List<Course> courses;
        private Major major;

        public Builder(Long id) {
            this.id = id;
        }

        public Builder firstName(String firstName) {
            this.firstName = firstName;
            return this;
        }
        public Builder lastName(String lastName) {
            this.lastName = lastName;
            return this;
        }
        public Builder courses(List<Course> courses) {
            this.courses = courses;
            return this;
        }
        public Builder major(Major major) {
            this.major = major;
            return this;
        }
        public Builder birthdate(Instant birthdate) {
            this.birthdate = birthdate;
            return this;
        }

        public Student build() {
            return new Student(this);
        }
    }



}
