package com.ald.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A BloodPressure.
 */
@Entity
@Table(name = "blood_pressure")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class BloodPressure implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "jhi_date")
    private LocalDate date;

    @Column(name = "sistolic")
    private String sistolic;

    @Column(name = "diastolic")
    private String diastolic;

    @ManyToOne
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public BloodPressure date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getSistolic() {
        return sistolic;
    }

    public BloodPressure sistolic(String sistolic) {
        this.sistolic = sistolic;
        return this;
    }

    public void setSistolic(String sistolic) {
        this.sistolic = sistolic;
    }

    public String getDiastolic() {
        return diastolic;
    }

    public BloodPressure diastolic(String diastolic) {
        this.diastolic = diastolic;
        return this;
    }

    public void setDiastolic(String diastolic) {
        this.diastolic = diastolic;
    }

    public User getUser() {
        return user;
    }

    public BloodPressure user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        BloodPressure bloodPressure = (BloodPressure) o;
        if (bloodPressure.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), bloodPressure.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "BloodPressure{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            ", sistolic='" + getSistolic() + "'" +
            ", diastolic='" + getDiastolic() + "'" +
            "}";
    }
}
